from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, "index.html")

def howTo(request):
    return render(request, 'howto.html')