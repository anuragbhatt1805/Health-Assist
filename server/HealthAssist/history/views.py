from rest_framework import (
    viewsets, permissions, status, filters
)
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action
from rest_framework.response import Response
from history.models import Sickness, Appointment, ReportFile
from history.serializer import (
    SicknessSerializer, SicknessDetailSerializer,
    AppointmentSerializer, AppointmentDetailSerializer, ReportFileSerializer
)


# Create your views here.
class SicknessViewSet(viewsets.ModelViewSet):
    """Manage Sickness in the database"""
    serializer_class = SicknessDetailSerializer
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (TokenAuthentication,)
    queryset = Sickness.objects.all()
    filter_backends = (filters.SearchFilter,)
    search_fields = ('patient', 'status', 'symptom')

    def perform_create(self, serializer):
        serializer.save(patient=self.request.user)

    def get_queryset(self):
        if self.request.user.is_staff:
            return Sickness.objects.all()
        else:
            return Sickness.objects.filter(patient=self.request.user)

    def get_serializer_class(self):
        if self.action == 'list':
            return SicknessSerializer
        return self.serializer_class

class AppointmentViewSet(viewsets.ModelViewSet):
    """Manage Appointment in the database"""
    serializer_class = AppointmentDetailSerializer
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (TokenAuthentication,)
    queryset = Appointment.objects.all()
    filter_backends = (filters.SearchFilter,)
    search_fields = ('doctor', 'sickness', 'symptom', 'prescription')

    def get_queryset(self):
        if self.request.user.is_superuser:
            return Appointment.objects.all()
        elif self.request.user.is_staff:
            return Appointment.objects.filter(doctor=self.request.user)
        else:
            sick = Sickness.objects.filter(patient=self.request.user)
            return Appointment.objects.filter(sickness__in=sick)

    def get_serializer_class(self):
        if self.action == 'list':
            return AppointmentSerializer
        elif self.action == 'upload_image':
            return ReportFileSerializer
        return self.serializer_class

    @action(methods=['POST'], detail=True, url_path='upload-image')
    def upload_image(self, request, pk=None):
        """Upload an  to a recipe"""
        appointment = self.get_object()
        serializer = ReportFileSerializer(
            data=request.data,
        )
        if serializer.is_valid():
            image_file = serializer.validated_data['file']
            report_file = ReportFile.objects.create(file=image_file)

            appointment.report.add(report_file)

            return Response(
                {"message": "Image uploaded successfully."},
                status=status.HTTP_200_OK,
            )
        else:
            return Response(
                serializer.errors,
                status=status.HTTP_400_BAD_REQUEST,
            )



