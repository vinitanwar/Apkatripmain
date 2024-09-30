<?php

namespace App\Http\Controllers;
use App\Models\airport;

use Illuminate\Http\Request;

class AirportController extends Controller
{
    //
    function getallPorts(Request $request){





        $page = $request->query('page', 1); 
        $query = $request->query('query', '');
         $res=airport::where('name', 'like', '%' . $query . '%')->paginate($page);
         if ($res->currentPage() > $res->lastPage()) {
           
            return redirect()->to('/api/airports?page='.urlencode($page-1).' &query=' . urlencode($query));
        }
        return response()->json($res);
    
    
       }
}
