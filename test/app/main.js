function main() {

	console.log( "2 + 4 = " + AtlasProject.Mathematics.add( 2 , 4 ) );

	console.log( "2 - 4 = " + AtlasProject.Mathematics.subtract( 2 , 4 ) );

	console.log( "2 * 4 = " + AtlasProject.Mathematics.multiply( 2 , 4 ) );

	console.log( "2 / 4 = " + AtlasProject.Mathematics.divide( 2 , 4 ) );

	console.log( "5 % 3 = " + AtlasProject.Mathematics.modulo( 5 , 3 ) );

	x = AtlasProject.Mathematics.Geometry.Shape.Polygon.Triangle.Right({
		"sideA": 2,
		"sideB": 3
	});

	console.log(
		AtlasProject.Mathematics.Geometry.Shape.Polygon.Triangle.Right.calcHypotenuse({
			"sideA": 2,
			"sideB": 3
		})
	);


	console.log(
		AtlasProject.Mathematics.Geometry.Shape.Polygon.Triangle.Right.calcSideLength({
			"hypotenuse": 5,
			"otherSideLength":4
		})
	);

}