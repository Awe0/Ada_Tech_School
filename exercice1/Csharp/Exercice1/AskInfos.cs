using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Asking
{
    public class AskInfos
    {
        public string name { get; set; }
        public int date { get; set; } 
        public int month { get; set; }
        public void askName()
        {
            Console.WriteLine("Bonjour, comment vous appelez-vous ?");
            name = Console.ReadLine();
        }
        public int askBirthYearAndMonth()
        {
            System.Console.WriteLine("Bonjour " + name + ", quelle est votre année de naissance ?");
            date = int.Parse(Console.ReadLine());
            int age = 2024 - date;
            System.Console.WriteLine("Quel est le mois de votre naissance ? (01,02,03,...)");
            month = int.Parse(Console.ReadLine());
            return age;
        }  
        public void verifyMonth(int age)
        {
            int thisMonth = DateTime.Now.Month;
            if (month == thisMonth)
            {
                System.Console.WriteLine("Ce moi ci vous avez " + age + " ans !");
            }
            else if (month < thisMonth)
            {
                System.Console.WriteLine("Vous avez " + age + " ans !");
            }
            else
            {
                System.Console.WriteLine("Cette année vous aurez " + age + " ans !");
            }
        }
    }
}