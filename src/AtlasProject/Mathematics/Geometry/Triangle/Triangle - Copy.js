// Triangle Class
public class Triangle{};

// Static (aka Class) Properties
static var nextId = 0;

static var byId = {};

static var quantity = 0;
// End Static Properties

// Constructor
constructor function( ) {

	static.byId[ static.nextId ] = this;
	quantity++;

	// Instance Properties
	this.id = static.nextId;
	static.nextId++;
	// End Instance Properties

	return this;

}
// End Constructor

// Methods (organize methods by Method and relationship)
instance function calcHypotenuse() {
}
// End Methods

// End Class