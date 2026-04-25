import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { useMemo, useState } from 'react';

export default function Index ({ datas, groupData, flash }) {
    const deleteStudent = async (id) => {
        await router.delete(`/student/${id}`);        
    };    
    return (
        <>                
        <AuthenticatedLayout>                        

            <div className='flex justify-start items-center px-3 pt-5'>
                <Link href={ route('student.create') } className='bg-gray-900 rounded-lg py-2 px-3 text-white'>
                    Create
                </Link>    
            </div>


            <div className="py-6">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                        <div className="overflow-x-auto">                        
                        <table className="min-w-full divide-y divide-gray-200 bg-white">
                            <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kelas</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">nama Siswa</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">nama Wali</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {groupData.map((group) => 
                                    group.map((s, index) => (                                                                            
                                        <tr className="hover:bg-gray-100 transition-colors" key={s.id}>                                            
                                            {index === 0 && (
                                                <td 
                                                    rowSpan={group.length} 
                                                    className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 align-middle"
                                                >
                                                    {s.grade.name}
                                                </td>
                                            )}
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {s.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {s.wali?.name || ''}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                                                <Link 
                                                    href={route('student.edit', s.id)} 
                                                    className='py-2 px-3 bg-blue-500 rounded-xl'
                                                >
                                                    Edit
                                                </Link>
                                                <button 
                                                    onClick={() => deleteStudent(s.id)} 
                                                    className='py-2 px-3 bg-red-600 rounded-xl'
                                                >
                                                    Hapus
                                                </button>
                                            </td>
                                        </tr>
                                    ))                                            
                                )}
                            </tbody>
                        </table>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>        
        </>
    );
}