#pragma strict

public var bullet : GameObject;

function Start () {

}

function Update () {
	// Move horizontally
	rigidbody2D.velocity.x = Input.GetAxis("Horizontal") * 10;

	// When the spacebar is pressed
	if (Input.GetKeyDown("space")) {
		// Create new bullet at "transform.position"
		// which is where the ship currently is
		Instantiate(bullet, transform.position, Quaternion.identity);
	}
}
