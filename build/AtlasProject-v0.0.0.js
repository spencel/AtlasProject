/*public module*/ var  AtlasProject = (function() {

// Global Variables (Static (aka Class) Properties)
// End Global Variables 

// Global Functions (Static (aka Class) Methods) (organize methods by function and relationship)
// End Global Functions

// End Module

// ../../src/AtlasProject/Mathematics.js
/*public module*/ var  Mathematics = (function() {

/*public*/ function add( a, b ) {

	return a + b;

}

/*public*/ function subtract( a, b ) {

	return a - b;

}

/*public*/ function multiply( a, b ) {

	return a * b;

}

/*public*/ function divide( a, b ) {

	return a / b;

}

/*public*/ function modulo( a, b ) {

	return a % b;
	
}

// ../../src/AtlasProject/Mathematics/Geometry.js
/*public module*/ var  Geometry = (function() {

// ../../src/AtlasProject/Mathematics/Geometry/Algebraic.js
/*public module*/ var  Algebraic = (function() {
// Expose Public Members
return {

}

}());

// ../../src/AtlasProject/Mathematics/Geometry/Convex.js
/*public module*/ var  Convex = (function() {
// Expose Public Members
return {

}

}());

// ../../src/AtlasProject/Mathematics/Geometry/Differential.js
/*public module*/ var  Differential = (function() {
// Expose Public Members
return {

}

}());

// ../../src/AtlasProject/Mathematics/Geometry/Discrete.js
/*public module*/ var  Discrete = (function() {
// Expose Public Members
return {

}

}());

// ../../src/AtlasProject/Mathematics/Geometry/Euclidean.js
/*public module*/ var  Euclidean = (function() {

// ../../src/AtlasProject/Mathematics/Geometry/Euclidean/PythagoreanTheorem.js
// A fundamental relation in Euclidean geometry among the three sides of a right triangle. It states that the square of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the other two sides.

/*public module*/ var  PythagoreanTheorem = (function() {


// Expose Public Members
return {

}

}());
// Expose Public Members
return {

PythagoreanTheorem: PythagoreanTheorem

}

}());

// ../../src/AtlasProject/Mathematics/Geometry/Shape.js
/*public module*/ var  Shape = (function() {;

// ../../src/AtlasProject/Mathematics/Geometry/Shape/Polygon.js
/*public module*/ var  Polygon = (function() {;


// ../../src/AtlasProject/Mathematics/Geometry/Shape/Polygon/Triangle.js
/*public module*/ var  Triangle = (function() {;

// ../../src/AtlasProject/Mathematics/Geometry/Shape/Polygon/Triangle/Right.js
// Right Class
/*public class Right{};*/
// Static (aka Class) Properties
Right.nextId = 0;

Right.byId = {};

Right.quantity = 0;
// End Static Properties

// Constructor
/*constructor*/ function Right( parameters ) {

	Right.byId[ Right.nextId ] = this;
	Right.quantity++;

	// Instance Properties
	this.id = Right.nextId;
	Right.nextId++;

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
Right.calcHypotenuse = function( parameters ) {

	var sideA = parameters[ "sideA" ];

	var sideB = parameters[ "sideB" ];

	/* 	Using the Pythagorean theorem: c^2 = a^2 + b^2
		c = hypotenuse
		a, b = sides
	*/

	var hypotenuse = Math.pow( sideA * sideA + sideB * sideB, 0.5 );

	return hypotenuse;

}

Right.calcSideLength = function( parameters ) {

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

// Expose Public Members
return {

Right: Right

}

}());
// Expose Public Members
return {

Triangle: Triangle

}

}());
// Expose Public Members
return {

Polygon: Polygon

}

}());

// ../../src/AtlasProject/Mathematics/Geometry/Topological.js
/*public module*/ var  Topological = (function() {
// Expose Public Members
return {

}

}());
// Expose Public Members
return {

Algebraic: Algebraic,

Convex: Convex,

Differential: Differential,

Discrete: Discrete,

Euclidean: Euclidean,

Shape: Shape,

Topological: Topological

}

}());
// Expose Public Members
return {

add: add,

subtract: subtract,

multiply: multiply,

divide: divide,

modulo: modulo,

Geometry: Geometry

}

}());
// Expose Public Members
return {

Mathematics: Mathematics

}

}());