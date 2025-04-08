import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Pizza, Phone, Clock, MapPin, Star, ChefHat, Truck, Users, Leaf, Award } from 'lucide-react';
import Spline from '@splinetool/react-spline';

function App() {
  const { scrollYProgress } = useScroll();
  const pizzaRotate = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const pizzaY = useTransform(scrollYProgress, [0, 1], [0, 1000]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 font-sans">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-8 relative">
        <motion.nav 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex justify-between items-center mb-16"
        >
          <div className="flex items-center gap-2">
            <Pizza className="w-8 h-8 text-orange-600" />
            <span className="text-2xl font-bold text-orange-600 font-display">PizzaHub</span>
          </div>
          <div className="flex gap-6">
            <a href="#menu" className="hover:text-orange-600 transition-colors">Menu</a>
            <a href="#about" className="hover:text-orange-600 transition-colors">About</a>
            <a href="#contact" className="hover:text-orange-600 transition-colors">Contact</a>
          </div>
        </motion.nav>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-1"
          >
            <h1 className="text-6xl font-bold mb-6 font-display">
              Delicious Pizza <br />
              <span className="text-orange-600">Delivered Hot & Fresh</span>
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Experience the perfect blend of flavors with our handcrafted pizzas,
              made with love and delivered right to your doorstep.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors text-lg"
            >
              Order Now
            </motion.button>
          </motion.div>

          <motion.div 
            style={{ 
              rotate: pizzaRotate,
              y: pizzaY
            }}
            className="flex-1 sticky top-20"
          >
            <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
          </motion.div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <Clock className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 font-display">Fast Delivery</h3>
              <p className="text-gray-600">Hot and fresh within 30 minutes</p>
            </motion.div>

            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6"
            >
              <Pizza className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 font-display">Quality Ingredients</h3>
              <p className="text-gray-600">Fresh and premium toppings</p>
            </motion.div>

            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center p-6"
            >
              <MapPin className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 font-display">Wide Coverage</h3>
              <p className="text-gray-600">Delivering across the city</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8 font-display">Our Story</h2>
            <p className="text-gray-600 text-lg mb-8">
              Founded in 1970, PizzaHub has been crafting perfect pizzas for over five decades. 
              Our secret lies in our traditional recipes, passed down through generations, 
              combined with modern techniques and the finest ingredients.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-orange-600 mb-2">50+</h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-orange-600 mb-2">100k+</h3>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-orange-600 mb-2">30+</h3>
                <p className="text-gray-600">Pizza Varieties</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Pizzas Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 font-display"
          >
            Our Popular Pizzas
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Margherita Supreme",
                image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
                price: "$14.99",
                description: "Fresh mozzarella, basil, and our signature tomato sauce"
              },
              {
                name: "Pepperoni Passion",
                image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80",
                price: "$16.99",
                description: "Double pepperoni with extra cheese"
              },
              {
                name: "Veggie Delight",
                image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
                price: "$15.99",
                description: "Fresh vegetables and mushrooms"
              }
            ].map((pizza, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img 
                  src={pizza.image} 
                  alt={pizza.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 font-display">{pizza.name}</h3>
                  <p className="text-gray-600 mb-4">{pizza.description}</p>
                  <p className="text-orange-600 font-bold">{pizza.price}</p>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 w-full bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition-colors"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Ingredients Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 font-display">Premium Ingredients</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We source only the finest ingredients from trusted local suppliers to ensure 
              every pizza meets our high standards of quality and taste.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Leaf className="w-8 h-8" />, title: "Fresh Produce", desc: "Locally sourced vegetables" },
              { icon: <ChefHat className="w-8 h-8" />, title: "Artisan Dough", desc: "48-hour fermented" },
              { icon: <Award className="w-8 h-8" />, title: "Premium Cheese", desc: "Italian mozzarella" },
              { icon: <Star className="w-8 h-8" />, title: "Special Sauce", desc: "Secret family recipe" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="text-orange-600 mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 font-display">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 font-display"
          >
            What Our Customers Say
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                review: "Best pizza in town! The crust is perfect and toppings are always fresh.",
                rating: 5
              },
              {
                name: "Mike Thompson",
                review: "Quick delivery and amazing taste. Their Margherita Supreme is to die for!",
                rating: 5
              },
              {
                name: "Emily Davis",
                review: "Love their variety of options. The vegetarian pizzas are exceptional!",
                rating: 5
              }
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{review.review}</p>
                <p className="font-semibold">{review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 font-display"
          >
            How It Works
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Pizza className="w-8 h-8" />, title: "Choose Your Pizza", desc: "Select from our menu" },
              { icon: <ChefHat className="w-8 h-8" />, title: "We Prepare", desc: "Fresh made to order" },
              { icon: <Truck className="w-8 h-8" />, title: "Fast Delivery", desc: "Right to your door" },
              { icon: <Users className="w-8 h-8" />, title: "Enjoy Together", desc: "Share the happiness" }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="text-orange-600 mb-4 flex justify-center">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2 font-display">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-orange-200"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 font-display">Order Now!</h2>
            <div className="flex items-center justify-center gap-2 text-xl">
              <Phone className="w-6 h-6" />
              <span>Call us at: 1-800-PIZZA</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-white text-orange-600 px-8 py-3 rounded-full hover:bg-orange-100 transition-colors text-lg"
            >
              Order Online
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default App;