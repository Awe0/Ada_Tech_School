import demineur

print("Enter the size of the grid (Exemple : 5 is a grid of 25 cells)")
size = int(input())
gridSize = size * size
print("How many mines do you want for a grid with " + str(gridSize) + " cells")
mines = int(input())
game = demineur.Demineur(size, mines)
game.printGrid()