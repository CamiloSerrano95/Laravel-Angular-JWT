<?php

namespace App\Http\Requests\Client;

use Illuminate\Foundation\Http\FormRequest;

class UpdateClientRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'names'          => 'required|string|max:255', 
            'identification' => 'required|string|max:12', 
            'telephone'      => 'required|string|max:12', 
            'address'        => 'required|string|max:255', 
            'email'          => 'required|string|email|max:255',
        ];
    }
}
