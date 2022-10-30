# Generated by Django 4.0.6 on 2022-10-28 22:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0005_alter_emplacement_type_alter_sensor_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sensor',
            name='type',
            field=models.CharField(choices=[('TEMP', 'temperature'), ('HUMA', 'air humidity'), ('HUMS', 'soil humidity'), ('LVLW', 'water level')], max_length=20),
        ),
    ]
