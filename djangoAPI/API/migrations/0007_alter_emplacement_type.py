# Generated by Django 4.0.6 on 2022-10-30 21:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0006_alter_sensor_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='emplacement',
            name='type',
            field=models.CharField(choices=[('plant', 'plant'), ('room', 'room'), ('greenhouse', 'greenhouse')], max_length=100),
        ),
    ]
