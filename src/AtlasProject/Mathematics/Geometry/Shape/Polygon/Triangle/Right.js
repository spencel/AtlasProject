// Right Class
public class Right{};

// Static (aka Class) Properties
static var nextId = 0;

static var byId = {};

static var quantity = 0;
// End Static Properties

// Constructor
constructor function( parameters ) {

	static.byId[ static.nextId ] = this;
	static.quantity++;

	// Instance Properties
	this.id = static.nextId;
	static.nextId++;

	this.sideA = parameters[ "sideA" ];

	this.sideB = parameters[ "sideB" ];

	this.hypotenuse = parameters[ "hypotenuse" ];

	this.angleA = parameters[ "angleA" ];

	this.angleB = parameters[ "angleB" ];

	this.angleC = parameters[ "angleC" ];
	// End Instance Properties

	return this;

}
// End Constructor

// Methods (organize methods by Method and relationship)
// A hypotenuse is the longest side of a right triangle
static function calcHypotenuse( parameters ) {

	var sideA = parameters[ "sideA" ];

	var sideB = parameters[ "sideB" ];

	/* 	Using the Pythagorean theorem: c^2 = a^2 + b^2
		c = hypotenuse
		a, b = sides
	*/

	var hypotenuse = Math.pow( sideA * sideA + sideB * sideB, 0.5 );

	return hypotenuse;

}

static function calcSideLength( parameters ) {

	var hypotenuse = parameters[ "hypotenuse" ];

	var otherSideLength = parameters[ "otherSideLength" ];

	/* 	Using the Pythagorean theorem: c^2 = a^2 + b^2
		c = hypotenuse
		a, b = sides
	*/

	var sideLength = Math.pow( hypotenuse * hypotenuse - otherSideLength * otherSideLength, 0.5 );

	return sideLength;

}
// End Methods

// End Class
