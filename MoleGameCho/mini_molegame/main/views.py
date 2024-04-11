from django.shortcuts import render, redirect, HttpResponseRedirect

# Create your views here.
def home(request):
    return render(request, "index.html")

def howTo(request):
    return render(request, 'howto.html')

def result1(request, myScore):
    print('실행됨 ****', myScore)
    return render(request, 'result1.html', {'score': myScore})

def result2(request, myScore):
    return render(request, 'result2.html', {'score': myScore})

def play(request):
    return render(request, 'play.html')


def score(request, score):
    print('---점수 실험---', score)

    return redirect("result1", score)