'use client'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export default function Page() {
  const searchParams = useSearchParams()
  const org_id = searchParams.get('org_id')
  const hf_token = searchParams.get('hf_token')

  useEffect(() => {
    const isOrgIdValid = org_id && org_id.length === 36
    const isHfTokenValid = hf_token && hf_token.length > 10
    if (isOrgIdValid && isHfTokenValid) {
      localStorage.setItem('modal_org_id', org_id as string)
      localStorage.setItem('hf_token', hf_token as string)
      window.location.href = '/swarm'
    } else {
      window.location.href = 'https://modal.com/org/gensyn-ai/spaces'
    }
  }, [org_id, hf_token])

  return null
}
