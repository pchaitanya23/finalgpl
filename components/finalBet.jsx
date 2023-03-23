import React from 'react'
import css from './finalBet.module.css'
import Navbar from './Navbar.jsx'
export default function finalBet() {
  return (
    <>
    
    <header>
		<h1>Welcome to the Betting Page!</h1>
	</header>

	{/* <nav>
		<ul>
			<li><a href="#">Home</a></li>
			<li><a href="#">Sports</a></li>
			<li><a href="#">Live Betting</a></li>
			<li><a href="#">Virtual Sports</a></li>
			<li><a href="#">Promotions</a></li>
			<li><a href="#">About Us</a></li>
		</ul>
	</nav> */}

  <Navbar/>

	<section>
		<h2>Today's Matches</h2>

		<div class={css.match}>
			<h3>Manchester United vs Liverpool</h3>
			<p>Match Odds:</p>
			<ul>
				<li>Manchester United: 2.50</li>
				<li>Draw: 3.00</li>
				<li>Liverpool: 2.80</li>
			</ul>
			<form method="post" action="process_bet.php">
				<label for="bet_amount">Bet Amount:</label>
				<input type="text" id="bet_amount" name="bet_amount"/><br/>

				<label for="team_selection">Select a Team:</label>
				<select id="team_selection" name="team_selection">
					<option value="Manchester United">Manchester United</option>
					<option value="Draw">Draw</option>
					<option value="Liverpool">Liverpool</option>
				</select><br/>

				<input type="submit" value="Place Bet"/>
			</form>
		</div>

		<div class={css.match}>
			<h3>Real Madrid vs Barcelona</h3>
			<p>Match Odds:</p>
			<ul>
				<li>Real Madrid: 1.80</li>
				<li>Draw: 3.50</li>
				<li>Barcelona: 3.20</li>
			</ul>
			<form method="post" action="process_bet.php">
				<label for="bet_amount">Bet Amount:</label>
				<input type="text" id="bet_amount" name="bet_amount"/><br/>

				<label for="team_selection">Select a Team:</label>
				<select id="team_selection" name="team_selection">
					<option value="Real Madrid">Real Madrid</option>
					<option value="Draw">Draw</option>
					<option value="Barcelona">Barcelona</option>
				</select><br/>

				<input type="submit" value="Place Bet"/>
			</form>
		</div>
	</section>

	<footer>
		<p>&copy; 2023 Betting Page. All rights reserved.</p>
	</footer>

    
    </>
  )
}
