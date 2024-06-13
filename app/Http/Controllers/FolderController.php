<?php

namespace App\Http\Controllers;

use App\Models\Directory;
use Illuminate\Http\Request;

class FolderController extends Controller
{
    public function createNewFolder(Request $request){

        $request->validate(['name' => 'required|max:100', 'folder_id' => "nullable|exists:directories,unique_id"]);


        if($request->parent_id)

        Directory::create([
            'name' => $request->name,
            'parent_id' => $request->folder_id,
        ]);

        return back();
    }
}
