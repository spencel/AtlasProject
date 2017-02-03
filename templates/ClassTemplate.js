// MyClass Class
public class MyClass{};

// Static (aka Class) Properties
static var nextId = 0;

static var byId = {};

static var quantity = 0;
// End Static Properties

// Constructor
constructor function() {

	static.byId[ static.nextId ] = this;
	static.quantity++;

	// Instance Properties
	this.id = static.nextId;
	static.nextId++;
	// End Instance Properties

	return this;

}
// End Constructor

// Methods (organize methods by Method and relationship)
static function myStaticMethod() {

	console.log( "myNamespace.MyPublicClass.myStaticMethod" );

}

instance function myInstanceMethod() {

	console.log( "myNamespace.MyPublicClass.myInstanceMethod" );

	static.myStaticMethod();

}

// A Public Class can expose a Private Class
static function getMyPrivateClass() {

	return MyPrivateClass;

}

// A Public Class can create Instances of a Private Classes
static function newMyPrivateClass() {

	return new MyPrivateClass();

}
// End Methods

// End Class