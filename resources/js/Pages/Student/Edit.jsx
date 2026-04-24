import { Link, router } from "@inertiajs/react";
import { useState } from "react";

export default function Edit({ errors, data, options }) {
    const [name, setName] = useState('' || data.name);
    const [grade, setGrade] = useState('' || data.grade_id);
    console.log('asdnjas: ', data);

    const updateStudent = async (e) => {
        e.preventDefault();

        await router.put(`/student/${data.id}`, {
            name: name,
            grade_id: grade
        })
    };

    return (
        <>
            <div className='flex justify-start items-center px-3 pt-5'>
                <Link href={ route('student.index') } className='bg-gray-900 rounded-lg py-2 px-3 text-white'>
                    Kembali
                </Link>
            </div>

            <div className="py-12">
                <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-2xl sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="max-w-sm mx-auto p-4">
                                <form onSubmit={updateStudent}>
                                    
                                    <div>
                                        <label for="name" className="block text-sm font-medium text-gray-700">
                                            Nama Siswa
                                        </label>
                                        <div className="mt-1">
                                            <input 
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            type="text" 
                                            name="name" 
                                            id="name" 
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2.5 border" 
                                            placeholder="Massukan Nama Siswa"
                                            />
                                        </div>
                                        {errors.name && (
                                            <div className="text-red-600 italic">
                                                {errors.name}
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <label for="grade" className="block text-sm mt-5 font-medium text-gray-700">
                                            Kelas
                                        </label>
                                        
                                        <div className="mt-1">
                                            <select name="grade" id="grade" value={grade} onChange={(e) => setGrade(e.target.value)} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2.5 border">
                                                <option value="" disabled>Pilih Kelas</option>
                                                {options.map((opt, index) => (                                                
                                                <option key={index} value={opt.id}>{opt.name}</option>                                                
                                                ))}
                                            </select>
                                        </div>
                                        {errors.grade_id && (
                                        <div className="text-red-600 italic">
                                            {errors.grade_id}
                                        </div>
                                    )}
                                    </div>

                                    <button type="submit" className="my-10 py-2 px-3 bg-gray-900 text-white rounded-xl">
                                        Edit
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