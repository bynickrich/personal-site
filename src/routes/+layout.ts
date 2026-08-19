import { dev } from '$app/env';
import { inject } from '@vercel/analytics';

inject({ mode: dev ? 'development' : 'production' });
