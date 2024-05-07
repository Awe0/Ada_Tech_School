namespace ClassesLib;

public class Player (int mysteryNumber, int minRange, int maxRange)
{
    private int givenNumber { get; set; }
    private int tryNumber = 0;

    public void askNumber()
    {
        System.Console.WriteLine("Entrez un nombre : ");
        givenNumber = int.Parse(Console.ReadLine());
        tryNumber++;
        didIWin();
    }
    public void didIWin()
    {
        if (givenNumber < mysteryNumber)
        {
            minRange = givenNumber;
            System.Console.WriteLine("Votre nombre se situe entre " + minRange + " et " + maxRange + "\nNombre de tentative = " + tryNumber);
            askNumber();
        }
        else if (givenNumber > mysteryNumber)
        {
            maxRange = givenNumber;
            System.Console.WriteLine("Votre nombre se situe entre " + minRange + " et " + maxRange + "\nNombre de tentative = " + tryNumber);
            askNumber();
        }
        else
        {
            System.Console.WriteLine("Bravo, vous avez deviné le nombre !\nNombre de tentative = " + tryNumber);
        }
    }
}
