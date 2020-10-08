from django.db import connections
from django.db import models


# Create your models here.

class Covid(models.Model):
    id = models.IntegerField(db_column='id', primary_key=True)
    cases = models.IntegerField(db_column='cases', null=True)
    # deaths = models.IntegerField(db_column='deaths', null=True)
    county = models.CharField(db_column='county', max_length=50, null=True)

    class Meta:
        db_table = "Covid-19-cases"
