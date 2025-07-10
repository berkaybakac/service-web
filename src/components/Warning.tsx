'use client';

export default function Warning() {
  return (
    <div className="bg-[#1f1f1f] border border-red-500 text-red-300 text-sm rounded-lg px-6 py-4 my-6 mx-auto max-w-5xl shadow-md">
      <p>
        <strong className="text-red-400">Uyarı:</strong> Bu web sitesi{' '}
        <span className="text-red-500 font-semibold">
          resmi yetkili servis değildir
        </span>
        . Sadece{' '}
        <span className="underline underline-offset-2 text-red-400">
          garanti süresi sona ermiş cihazlar
        </span>{' '}
        için teknik destek, bakım ve onarım hizmeti sunulmaktadır.
      </p>
    </div>
  );
}
