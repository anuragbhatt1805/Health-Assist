import uuid, os
from django.db import models
from django.conf import settings

# Create your models here.
def report_file_name(instance, filepath):
    "Function for report Picture"
    ext = os.path.splitext(filepath)[1]
    filename = f"{uuid.uuid4()}{ext}"
    return os.path.join('reports', filename)


class Sickness(models.Model):
    patient = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True)
    time = models.TimeField(auto_now_add=True)
    status = models.BooleanField(default=False)
    symptom = models.CharField(max_length=155)
    objects = models.Manager()


class ReportFile(models.Model):
    file = models.FileField(upload_to=report_file_name, blank=True, null=True)
    objects = models.Manager()


class Appointment(models.Model):
    date = models.DateField(auto_now_add=True)
    time = models.TimeField(auto_now_add=True)
    doctor = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    sickness = models.ForeignKey(Sickness, on_delete=models.CASCADE)
    symptom = models.CharField(max_length=200)
    prescription = models.CharField(max_length=255)
    report = models.ManyToManyField(ReportFile)
    objects = models.Manager()

    def create(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Check if the provided doctor is a staff user
        doctor = serializer.validated_data['doctor']
        if not doctor.is_staff:
            raise ValueError({"doctor": "Only staff users can be added as doctors."})

        # Create the appointment instance
        return self.perform_create(serializer)

