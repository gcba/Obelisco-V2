// Para que al darle a /content, redirija a /comunicar-con-claridad
import { redirect } from 'next/navigation';
// app\src\components\Layout\main-layout.tsx

export default function ContentPage() {
  redirect('/content/comunicar-con-claridad');
}
