<?php
use App\Item;
use Illuminate\Database\Seeder;

/**
 * Created by Michał Nowacki
 * Date: 13.03.15
 * Time: 11:37
 * Filename: ItemsTableSeeder.php
 */
class ItemsTableSeeder extends Seeder
{

    function run()
    {
        $faker = Faker\Factory::create();

        Item::truncate();

        foreach(range( 1, 30 ) as $index)
        {
            Item::create( [
                'title'       => $faker->sentence(),
                'description' => $faker->paragraph( 4 ),
                'image'       => $faker->imageUrl( 300, 200 )
            ] );
        }
    }
}