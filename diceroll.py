import random

def dice_roll_simulation(percobaan):
    results = [0] * 20 

    for _ in range(percobaan):
        roll = random.randint(1, 20) 
        results[roll - 1] += 1

    for i in range(20):
        print(f"Sisi {i + 1}: {results[i]}/{percobaan}")
        print(f"Probabilitas Sisi {i + 1}: {results[i] / percobaan:.6f}")

dice_roll_simulation(1000000)
