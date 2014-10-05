#pragma strict

public var speed : int = -5;

function Start () {
	// Add a vertical speed to the enemy
	rigidbody2D.velocity.y = speed;

	// Make the enemy rotate on itself
	rigidbody2D.angularVelocity = Random.Range(-200, 200);

	// Destroy the enemy after 3 seconds
	Destroy(gameObject, 3);
}

function Update () {

}

function OnTriggerEnter2D(obj : Collider2D) {
	var name = obj.gameObject.name;

	// On collision with a bullet
	if (name == "bullet(Clone)") {
		Destroy(gameObject);
		Destroy(obj.gameObject);
	}

	if (name == "spaceship") {
		Destroy(gameObject);
	}
}
