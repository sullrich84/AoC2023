import os
import sympy

sample = open("sample.txt")
task = open("task.txt")

os.system("cls" if os.name == "nt" else "clear")
print("🎄 Day 24: Never Tell Me The Odds")


def solve(data):
    lines = lambda line: tuple(map(int, line.replace(" @ ", ", ").split(", ")))
    stones = [lines(line) for line in data]
    
    sx, sy, sz, svx, svy, svz = sympy.symbols("sx, sy, sz, svx, svy, svz")
    toSolve = []

    for x, y, z, vx, vy, vz in stones:
        toSolve.append((sx - x) * (vy - svy) - (sy - y) * (vx - svx))
        toSolve.append((sy - y) * (vz - svz) - (sz - z) * (vy - svy))

    result = sympy.solve(toSolve)
    return result[0][sx] + result[0][sy] + result[0][sz]


print("\nPart 2:")
print("Sample:\t", solve(sample))
print("Task:\t", solve(task))
