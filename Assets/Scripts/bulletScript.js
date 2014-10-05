#pragma strict

public var speed : int = 6;

function Start () {
	rigidbody2D.velocity.y = speed;
}

function Update () {

}

function OnBecameInvisible() {
	Destroy(gameObject);
}
