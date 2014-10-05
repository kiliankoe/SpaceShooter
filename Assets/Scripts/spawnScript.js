#pragma strict

public var enemy : GameObject;
public var spawnTime : float = 2;

function Start () {
	// Call addEnemy function every spawnTime seconds
	InvokeRepeating("addEnemy", spawnTime, spawnTime);
}

function Update () {

}

function addEnemy() {
	// Store X position of the spawn object
	var x1 = transform.position.x - renderer.bounds.size.x/2;
	var x2 = transform.position.x + renderer.bounds.size.x/2;

	// Randomly pick a position within the spawn object
	var spawnPoint = new Vector2(Random.Range(x1, x2), transform.position.y);

	// Create an enemy
	Instantiate(enemy, spawnPoint, Quaternion.identity);
}
