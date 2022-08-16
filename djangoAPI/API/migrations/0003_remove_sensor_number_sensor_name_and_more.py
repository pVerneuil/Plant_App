# Generated by Django 4.0.6 on 2022-08-13 19:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0002_alter_feedback_time_alter_sensor_type'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='sensor',
            name='number',
        ),
        migrations.AddField(
            model_name='sensor',
            name='name',
            field=models.CharField(max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='emplacement',
            name='type',
            field=models.CharField(choices=[('room', 'room'), ('greenhouse', 'greenhouse'), ('plant', 'plant')], max_length=100),
        ),
    ]
