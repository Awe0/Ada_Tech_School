import random

hash = '#'

class Demineur:

    def __init__(self, gridSize, nbMines):
        self.gridSize = gridSize
        self.nbMines = nbMines
        self.grid = self.createGrid()

    def createRow(self):
        row = []
        for i in range(self.gridSize):
            row.append(hash)
        return row

    def createGrid(self):
        grid = []
        for i in range(self.gridSize):
            grid.append(self.createRow())
        return grid

    def printGrid(self):
        for row in self.grid:
            print(' '.join(row))

    def placeMine(nbMines, gridSize):
        mines = 0
        while mines < nbMines:
            x = random.randint(0, gridSize)

game = Demineur(5,5)
game.printGrid()