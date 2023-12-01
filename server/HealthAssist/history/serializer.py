from django.contrib.auth import get_user_model
from rest_framework import serializers
from history.models import Sickness, Appointment, ReportFile



class SicknessSerializer(serializers.ModelSerializer):

    class Meta:
        model = Sickness
        fields = [
            'id', 'patient', 'date', 'time', 'status',
            'symptom'
        ]
        read_only_fields = ['id', 'patient', 'date', 'time', 'status']

class AppointmentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Appointment
        fields = [
            'id', 'date', 'time', 'sickness', 'doctor'
        ]
        read_only_fields = ['id', 'date', 'time']

class SicknessDetailSerializer(SicknessSerializer):

    appointment = AppointmentSerializer(many=True, read_only=True)

    class Meta(SicknessSerializer.Meta):
        fields = SicknessSerializer.Meta.fields + ['appointment']
        read_only_fields = ['id', 'patient', 'date', 'time', 'appointment']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        sickness = representation.get('id')
        appointment = Appointment.objects.filter(sickness=sickness)
        if appointment.exists():
            representation['appointment'] = [
                {
                    'id': appt.id,
                    'date': appt.date,
                    'time': appt.time,
                    'doctor':str(appt.doctor.id)
                }
            for appt in appointment
            ]
        else:
            representation['appointment'] = None
        return representation

class ReportFileSerializer(serializers.ModelSerializer):

    class Meta:
        model = ReportFile
        fields = ['id', 'file']
        read_only_fields = ['id']


class AppointmentDetailSerializer(AppointmentSerializer):

    report = ReportFileSerializer(many=True, read_only=True)

    class Meta(AppointmentSerializer.Meta):
        fields = AppointmentSerializer.Meta.fields + [
            'symptom', 'prescription', 'report'
        ]
        read_only_fields = AppointmentSerializer.Meta.read_only_fields