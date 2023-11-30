from django.contrib import admin
from .models import Sickness, ReportFile, Appointment

# Register your models here.
admin.site.register(Sickness)
admin.site.register(ReportFile)
admin.site.register(Appointment)