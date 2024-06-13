<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Directory;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function showDashboard(String $folder_id = null){

        $folders = Directory::when($folder_id, function($q) use ($folder_id) {
            $q->where('parent_id', $folder_id);
        })->get()->map(function($dir){
            return [
                'id' => $dir->unique_id,
                'name' => $dir->name,
                'color' => $dir->color,
                'last_modified_at' => $dir->updated_at->format('F d, Y H:i A'),
            ];
        });



        return Inertia::render("Dashboard", compact('folders', 'folder_id'));
    }
}
