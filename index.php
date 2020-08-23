<!DOCTYPE html>
<html>
<head>
	<title>pixweb</title>
	<link rel="stylesheet" type="text/css" href="thing.css">
	
</head>
<body>

	<p hidden id='pixels'><?php
		$filename = "pixels.txt";

		$pixeldata = fopen($filename, 'r') or die("pixels have been corrupted :(");
		echo fread($pixeldata, filesize($filename));
		fclose($pixeldata);
		?></p>
	<div class="mything">
		<div>
			<h1 id='mainH'>
				PIXWEB
			</h1>
			<h4 id='subH'>
				Construct art with others, one pixel at a time.
			</h4>
		</div>
		<form action="/pixhandler.php" method="post" id="myform">
			<!--
			<table>
				
				
				
				<tr class="textBox">

					<td>
						<label for="red">red</label>
					</td>
					<td>
						<input type="text" name="red" id="red">
					</td>
					
				</tr>
				
				<tr class="textBox">
					<td>
						<label for="green">green</label>
					</td>
					<td>
						<input type="text" name="green" id="green">
					</td>
					
				</tr>

				<tr class="textBox">
					<td>
						<label for="blue">blue</label>
					</td>
					<td>
						<input type="text" name="blue" id="blue">
					</td>
					
				</tr>
				
			</table>
			-->
			
			<span class='textBox'>
				<label for="red">red</label>
				<input type="text" name="red" class="inBox" id="red">
			</span>
			<br>
			<br>
			<span class='textBox'>
				<label for="green">green</label>
				<input type="text" name="green" class="inBox" id="green">
			</span>
			<br>
			<br>
			<span class='textBox'>
				<label for="blue">blue</label>
				<input type="text" name="blue" class="inBox" id="blue">
			</span>
			<!--<div>
				<input type="submit" name="submit">
			</div>-->
			<input type="text" name="x" hidden id="x">
			<input type="text" name="y" hidden id="y">
			
		</form>
		<br>
		<br>
		<br>
		<button type='button' id='check'>
			check color
		</button>
	</div>
	<div class="centerThis">
		<canvas id="myCanvas" width="800" height="800"></canvas>
	</div>
	<script type="text/javascript" src="pixweb.js"></script>
</body>
</html>