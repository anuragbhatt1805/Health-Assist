# Generated by Django 4.2.7 on 2023-11-30 21:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('history', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sickness',
            name='symptom',
            field=models.CharField(editable=False, max_length=155),
        ),
    ]
