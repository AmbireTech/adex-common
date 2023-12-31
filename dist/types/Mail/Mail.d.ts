export type MailAttachment = {
    filename: string
    content: string
}
export type Mail = {
    to: string | string[]
    from?: string
    cc?: string | string[]
    bcc?: string | string[]
    subject: string
    text: string
    html?: string
    attachments?: MailAttachment[]
}
