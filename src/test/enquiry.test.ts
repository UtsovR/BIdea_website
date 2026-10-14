import { describe, it, expect } from 'vitest';
import { contactSchema, contactMessage, quoteMessage, whatsappUrl } from '@/lib/enquiry';
const contact = { name:'Demo Contact',business:'Demo business',phone:'+91 9000000000',email:'demo@example.com',location:'Kolkata',message:'A sample signage project enquiry.' };
describe('B.Idea enquiry validation and handoff',()=>{
 it('rejects empty contact details',()=>expect(contactSchema.safeParse({...contact,name:'',phone:'',location:'',message:''}).success).toBe(false));
 it('rejects malformed phone and email',()=>expect(contactSchema.safeParse({...contact,phone:'invalid',email:'not-an-email'}).success).toBe(false));
 it('allows an optional email and business',()=>expect(contactSchema.safeParse({...contact,email:'',business:''}).success).toBe(true));
 it('limits message lengths',()=>expect(contactSchema.safeParse({...contact,message:'x'.repeat(1501)}).success).toBe(false));
 it('encodes the handoff without changing the destination',()=>{const url=new URL(whatsappUrl(contactMessage({...contact,message:'Display enquiry with & and ? details.'})));expect(url.origin+url.pathname).toBe('https://wa.me/919007388414');expect(url.searchParams.get('text')).toContain('Display enquiry with & and ? details.');});
 it('includes category, requirements and contact in a quote',()=>{const message=quoteMessage({...contact,category:'LED Screen',requirements:{Environment:'Outdoor','Approximate dimensions':'10 ft x 6 ft'}});expect(message).toContain('Category: LED Screen');expect(message).toContain('Environment: Outdoor');expect(message).toContain('Name: Demo Contact');});
 it('rejects an unsupported quote category',()=>expect(()=>quoteMessage({...contact,category:'Unrecognised',requirements:{}})).toThrow());
});
