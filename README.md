# Football-League-Simulator

This Python project allows users to simulate various football leagues from around the world using FIFA 20 statistics. The simulator conducts week-by-week simulations of matches between all teams in the selected league, resulting in a final output that presents league standings.

|     | Club     | Matches Played | Wins | Draws | Losses | Points | GF  | GA  | GD  |
| --- | -------- | -------------- | ---- | ----- | ------ | ------ | --- | --- | --- |
| 1   | Juventus | 38             | 31   | 1     | 6      | 94     | 113 | 32  | 81  |
| 2   | Napoli   | 38             | 26   | 6     | 6      | 84     | 83  | 31  | 52  |
| 3   | Inter    | 38             | 26   | 5     | 7      | 83     | 93  | 45  | 48  |
| 4   | Milan    | 38             | 23   | 10    | 5      | 79     | 68  | 25  | 43  |
| 5   | Lazio    | 38             | 20   | 7     | 11     | 67     | 82  | 57  | 25  |
| 6   | Torino   | 38             | 17   | 7     | 14     | 58     | 59  | 45  | 14  |

## How to Run the Simulator

To run this simulator locally, follow these steps:

1. Clone the repository to your local machine:

    ```
    git clone https://github.com/YourUsername/Football-Simulator.git
    ```

2. Navigate to the main project directory:

    ```
    cd Football-Simulator
    ```

3. Set up and activate your virtual environment (optional):

    ```
    # To create a virtual environment:
    python -m venv .venv

    # Activate it using one of the following commands based on your OS:
    source .venv/bin/activate   # On Mac / Linux
    .venv\Scripts\activate.bat   # In Windows CMD
    .venv\Scripts\Activate.ps1   # In Windows PowerShell
    ```

4. Install the required packages from the `requirements.txt` file:

    ```
    pip install -r requirements.txt
    ```

5. Start the simulator by running:

    ```
    python simulator
    ```

## How It Works

The simulator uses a probabilistic approach to simulate match events. The probabilities of different events occurring in a match are calculated minute by minute and scaled based on the strengths of the teams involved.



ORIGINAL PROJECT CLONED FROM 
https://github.com/AllenThomasDev

ORIGINAL PROJECT CLONED FROM
https://github.com/AllenThomasDev/Football-Simulator