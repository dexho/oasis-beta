from django.shortcuts import render
from home.models import Covid
from django.http import HttpResponse


# Create your views here.


def home(request):
    cases = Covid.objects.raw('select id, cases from `Covid-19-cases` limit 5')[1]
    area = Covid.objects.raw('select id, county from `Covid-19-cases` limit 5')[1]
    context = {
        "CovidInfo": cases,
        "CovidInfo1": area
    }
    return render(request, "index.html", context)


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")