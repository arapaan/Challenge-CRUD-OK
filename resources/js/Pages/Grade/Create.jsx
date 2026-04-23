import { Link, router } from "@inertiajs/react";
import { useState } from "react";

export default function Create({ errors }) {
    const [name, setName] = useState('');

    const storeGrade = async (e) => {
        e.preventDefault();

        await router.post('/grade', {
            name: name
        })
    };

    return (
        <>
            <div className='flex justify-start items-center px-3 pt-5'>
                <Link href={ route('grade.index') } className='bg-gray-900 rounded-lg py-2 px-3 text-white'>
                    Kembali
                </Link>
            </div>

            <div className="py-12">
                <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-2xl sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div class="max-w-sm mx-auto p-4">
                                <form onSubmit={storeGrade}>
                                    
                                    <label for="name" class="block text-sm font-medium text-gray-700">
                                        Nama Kelas
                                    </label>
                                    <div class="mt-1">
                                        <input 
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        type="text" 
                                        name="name" 
                                        id="name" 
                                        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2.5 border" 
                                        placeholder="Massukan Nama Kelas"
                                        />
                                    </div>
                                    {errors.name && (
                                        <div className="text-red-600 italic">
                                            {errors.name}
                                        </div>
                                    )}

                                    <button type="submit" className="my-10 py-2 px-3 bg-gray-900 text-white rounded-xl">
                                        Tambahkan
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}