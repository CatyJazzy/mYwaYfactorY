from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, "index.html")

def howTo(request):
    return render(request, 'howto.html')

def result1(request):
    return render(request, 'result1.html')

def result2(request):
    return render(request, 'result2.html')

def play(request):
    return render(request, 'play.html')