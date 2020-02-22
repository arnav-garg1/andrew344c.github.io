import math

def euler(xinit, yinit, dx, xend, dfunc):
    while xinit < xend:
        print(xinit, yinit)
        yinit += dfunc(xinit, yinit) * dx
        xinit += dx
    print(xinit, yinit)

euler(0.1, 1, 0.05, 0.2, lambda x, y: 2*y - 4*x )

