import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const projectsFilePath = path.join(process.cwd(), 'data/projects.json');

export async function GET() {
  try {
    const fileContents = await fs.readFile(projectsFilePath, 'utf8');
    const projects = JSON.parse(fileContents);
    return NextResponse.json(projects);
  } catch (error) {
    console.error(error);
    return new NextResponse('Error reading projects file', { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const projects = await request.json();
    await fs.writeFile(projectsFilePath, JSON.stringify(projects, null, 2));
    return new NextResponse('Projects saved successfully', { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse('Error saving projects file', { status: 500 });
  }
}
