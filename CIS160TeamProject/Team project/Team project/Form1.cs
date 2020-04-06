//Program by Chloe White and Collin Savunen
using System;

using System.Windows.Forms;

namespace Team_project
{
    public partial class Form1 : Form
    {
        // Variable to make it so the text box is not automatically zero 
        bool firstTime = true;
        //Variable to hold the operator 
        string Operator;
        //Variable to hold the total and first value
        double total;


        public Form1()
        {
            InitializeComponent();
        }

        #region Number methods
        private void btnNum0_Click(object sender, EventArgs e)
        {
            inputValue("0");
            inputFocus();
        }

        private void btnNum1_Click(object sender, EventArgs e)
        {
            inputValue("1");
            inputFocus();
        }

        private void btnNum2_Click(object sender, EventArgs e)
        {
            inputValue("2");
            inputFocus();
        }

        private void btnNum3_Click(object sender, EventArgs e)
        {
            inputValue("3");
            inputFocus();
        }

        private void btnNum4_Click(object sender, EventArgs e)
        {
            inputValue("4");
            inputFocus();
        }

        private void btnNum5_Click(object sender, EventArgs e)
        {
            inputValue("5");
            inputFocus();
        }

        private void btnNum6_Click(object sender, EventArgs e)
        {
            inputValue("6");
            inputFocus();
        }

        private void btnNum7_Click(object sender, EventArgs e)
        {
            inputValue("7");
            inputFocus();
        }

        private void btnNum8_Click(object sender, EventArgs e)
        {
            inputValue("8");
            inputFocus();
        }

        private void btnNum9_Click(object sender, EventArgs e)
        {
            inputValue("9");
            inputFocus();
        }
        #endregion

        #region Operator Methods

        //Event handler for the clear button. Clears all text boxes. 
        private void btnDelete_Click(object sender, EventArgs e)
        {
            //For loop to clear text boxes 
            for (int i = 1; i < 5; i++)
            {
                txtBoxUserInput.Text = "";
            }
            //Clears txtBoxEquationDisplay
            txtBoxEquationDisplay.Text = string.Empty;
            //Clears Mathmatical total 
            total = 0;
            //resets firsTime to true in order to make textbox not automatically 0
            firstTime = true;
            //refocouses on txtBoxUserInput 
            txtBoxUserInput.Focus();
            //Clears txtBoxAns 
            txtBoxAns.Text = "";
        }

        //Method to do division
        private void btnDiv_Click(object sender, EventArgs e)
        {
            inputValue("/");
            ButtonPress();
            Operator = "/";
        }
        //Method to do Multiplication
        private void btnMult_Click(object sender, EventArgs e)
        {
            inputValue("x");
            ButtonPress();
            Operator = "x";
        }
        //Method to do Subtraction
        private void btnMinus_Click(object sender, EventArgs e)
        {
            inputValue("-");
            ButtonPress();
            Operator = "-";
        }
        //Method to do Addition
        private void btnAdd_Click(object sender, EventArgs e)
        {
            inputValue("+");
            ButtonPress();
            Operator = "+";
        }


        //Method to do Power operations
        private void btnPower_Click(object sender, EventArgs e)
        {
            inputValue("^");
            ButtonPress();
            Operator = "^";
        }
        //Method to do Root operations
        private void btnSqrt_Click(object sender, EventArgs e)
        {
            inputValue(" root(");
            ButtonPress();
            Operator = "(sqrt)";
        }
        //Method to invert the sign of the currentNumber
        private void btnNegative_Click(object sender, EventArgs e)
        {
            var currentNumber = Convert.ToDouble(txtBoxUserInput.Text) * -1;
            txtBoxUserInput.Text = currentNumber.ToString();
        }

        #endregion

        #region Helper Methods


        //Method to change focus to txtBoxUserInput
        private void inputFocus()
        {
            txtBoxUserInput.Focus();
        }
        //Method to input values in txtBoxEquationDisplay
        private void inputValue(string value)
        {
            double e;
            if (value == "0" || value == "1" || value == "2" || value == "3" || value == "4" || value == "5" || value == "6" || value == "7" || value == "8" || value == "9")
            {
                //insert value at end of text in txtBoxEquationDisplay
                txtBoxEquationDisplay.Text = txtBoxEquationDisplay.Text.Insert(txtBoxEquationDisplay.Text.Length, value);
                //inserts value in txtBoxUserInput
                txtBoxUserInput.Text = txtBoxUserInput.Text + value;
            }
            else
                //insert value at end of text
                txtBoxEquationDisplay.Text = txtBoxEquationDisplay.Text.Insert(txtBoxEquationDisplay.Text.Length, value);


        }
        //Method to update display of txtBoxUserInput
        private void updateDisplay()
        {
            txtBoxAns.Text = total.ToString();
            txtBoxUserInput.Text = "";
            txtBoxUserInput.Focus();
        }
        private void ButtonPress()
        {
            if (firstTime)
            {
                firstTime = false;

                total = Convert.ToDouble(txtBoxUserInput.Text);
                txtBoxUserInput.Text = "";
                txtBoxUserInput.Focus();

                return;
            }
            calculate();
            updateDisplay();
        }

        #endregion

        #region calculate
        private void calculate()
        {
            double currentNumber = Convert.ToDouble(txtBoxUserInput.Text);

            try
            {
                if (Operator == "+")
                {
                    total = total + currentNumber;
                }
                else if (Operator == "-")
                {
                    total = total - currentNumber;
                }
                else if (Operator == "/")
                {
                    total = total / currentNumber;
                }
                else if (Operator == "x")
                {
                    total = total * currentNumber;
                }
                else if (Operator == "^")
                {
                    total = Math.Pow(total, currentNumber);
                }
                else if (Operator == "(sqrt)")
                {
                    total = Math.Pow(total, (1 / currentNumber));
                }
            }
            catch (FormatException)
            {
                MessageBox.Show("Please input a number or an operator!");
            }
            catch (OverflowException)
            {
                MessageBox.Show("An OverflowException occured!");
            }
            catch (DivideByZeroException)
            {
                MessageBox.Show("You cannot divide by zero!");
            }
            catch (Exception)
            {
                MessageBox.Show("An error occured!");
            }


            //Displays total
            txtBoxAns.Text = Convert.ToString(total);

        }
        private void btnEqual_Click(object sender, EventArgs e)
        {
            calculate();
            updateDisplay();

        }

        #endregion

        #region Noted out code

        //From btnEqual_Click
        //double secondNumber;
        //double Result;

        //var x = txtBoxUserInput.Text;
        //secondNumber = Convert.ToDouble(txtBoxUserInput.Text);

        //if (Operator == "+")
        //{
        // Result = (firstNumber + secondNumber);
        // //txtBoxUserInput.Text = "";
        // txtBoxAns.Text = Convert.ToString(Result);
        // firstNumber = Result;
        //}
        //if (Operator == "-")
        //{
        // Result = (firstNumber - secondNumber);
        // txtBoxAns.Text = Convert.ToString(Result);
        //}
        //if (Operator == "/")
        //{
        // Result = (firstNumber / secondNumber);
        // txtBoxAns.Text = Convert.ToString(Result);
        //}
        //if (Operator == "x")
        //{
        // Result = (firstNumber * secondNumber);
        // txtBoxAns.Text = Convert.ToString(Result);
        //}

        //From Varible declaration in public partial class Form1 : Form
        //double firstNumber;
        //double secondNumber;

        //from operator methods
        //  private void btnLParenthesis_Click(object sender, EventArgs e)
        //  {
        //      txtBoxUserInput.Text += btnLParenthesis.Text;
        //  }

        // private void btnRParenthesis_Click(object sender, EventArgs e)
        // {
        //     txtBoxUserInput.Text += btnRParenthesis.Text;
        // }

        //From btnAdd_Click
        //firstNumber = Convert.ToDouble(txtBoxUserInput.Text);
        //txtBoxUserInput.Text += btnAdd.Text;
        //txtBoxUserInput.Text += btnAdd.Text;









        #endregion


            

       

        private void Form1_Load(object sender, EventArgs e)
        {

        }
    }

}
