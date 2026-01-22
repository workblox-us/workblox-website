import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const formData = new FormData();
    formData.append('answers', JSON.stringify({ questions: body.questions }));

    const response = await fetch(
      'https://us14.list-manage.com/survey/respond?u=27f7d507fd7e1adf25f3c61d8&id=0d9c63ad1b&e=' +
        encodeURIComponent(body.email) +
        '&attribution=true',
      {
        method: 'POST',
        body: formData,
        // IMPORTANT: do NOT manually set Content-Type
      }
    );

    if (!response.ok) {
      const text = await response.text();
      return NextResponse.json(
        { error: 'Mailchimp submit failed', details: text },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: 'Unexpected server error' },
      { status: 500 }
    );
  }
}
