# Generated by Django 4.0.6 on 2022-08-13 19:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='feedback',
            name='time',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='sensor',
            name='type',
            field=models.CharField(choices=[('lvl', 'lvl'), ('temp', 'temp'), ('soilmoist', 'soilmoist'), ('airmoist', 'airmoist')], max_length=20),
        ),
    ]
