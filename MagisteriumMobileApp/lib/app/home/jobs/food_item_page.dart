import 'package:flutter/material.dart';
import '../components/action_button.dart';
import '../models/food_item.dart';
import '../models/profile.dart';


@immutable
class FoodItemPage extends StatelessWidget {
  
  final FoodItem foodItem;
  final Profile tutorProfile;

  FoodItemPage({required this.foodItem, required this.tutorProfile});
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Profile'),
      ),
      body: SafeArea(
        child: Stack(
          children: <Widget>[
            _buildBody(context),
            _buildAppBar(context),
            Align(
              child: _buildBottomBar(context),
              alignment: Alignment.bottomCenter,
            ),
          ],
        ),
      )
    );
  }

  Widget _buildBody(BuildContext context) {
    String price;
    if (tutorProfile.type == 'Paid') {
      if (tutorProfile.attainment == 'Bachelor\'s Degree') {
        price = "PHP 150 per hour";
      } else if (tutorProfile.attainment == 'Master\'s Degree') {
        price = "PHP 200 per hour";
      } else if (tutorProfile.attainment == 'Doctor\'s Degree') {
        price = "PHP 300 per hour";
      } else {
        price = "PHP 100 per hour";
      }
    } else {
      price = "Any price you like";
    }
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        Container(
          height: MediaQuery.of(context).size.height * 0.50,
          decoration: BoxDecoration(
            image: DecorationImage(image: NetworkImage(foodItem.imageUrl),
              fit: BoxFit.fill,
            ),
          ),
        ),
        Expanded(
          child: Padding(
            padding: const EdgeInsets.all(24,),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Row(
                  children: <Widget>[
                    Expanded(child: Text(foodItem.itemName, style: TextStyle(fontSize: 18, fontWeight: FontWeight.w600,),)),

                    Icon(Icons.watch_later, color: Colors.green, size: 18,),
                    SizedBox(width: 2,),
                    Text(tutorProfile.type, style: TextStyle(color: Colors.green, fontSize: 14,),),

                    SizedBox(width: 8,),

                    Icon(Icons.star_border, color: Colors.red, size: 18,),
                    SizedBox(width: 2,),
                    Text(foodItem.rating, style: TextStyle(color: Colors.red, fontSize: 14,),),

                  ],
                  mainAxisAlignment: MainAxisAlignment.center,
                ),
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 20,),
                  child: Text(price, style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold,),),
                ),

                Text('hello',
                  style: TextStyle(color: Colors.black, fontSize: 14, wordSpacing: 5),
                )

              ],
            ),
          )
        ),
      ],
    );
  }


  Widget _buildAppBar(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(20),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          // ElevatedButton(
          //   onPressed: () {
          //     Navigator.pop(context);
          //   },
          //   child: ActionButton(icon: Icons.arrow_back_ios),
          // ),
          // ActionButton(icon: Icons.add_shopping_cart,),
        ],
      ),
    );
  }


  Widget _buildBottomBar(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(20),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Card(
            child: Padding(
              padding: const EdgeInsets.all(12,),
              child: Icon(Icons.favorite_border, color: Theme.of(context).accentColor,),
            ),
          ),
          Expanded(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16,),
              child: RaisedButton(onPressed: () {},
                padding: EdgeInsets.all(16,),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.all(Radius.circular(8,))),
                color: Theme.of(context).accentColor,
                child: Text("Book Tutor", style: TextStyle(
                  fontSize: 16,
                  color: Colors.white,
                ),),
              ),
            ),
          ),
        ],
      ),
    );
  }



}
