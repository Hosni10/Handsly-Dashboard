import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proposal } from '../../interface/proposal';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {
  private addproposalUrl = 'http://localhost:8000/api/v1/proposals/addproposal';
  private updateproposalUrl = 'http://localhost:8000/api/v1/proposals/updateproposal/:id';

  constructor(private http:HttpClient) { }

  addProposal(proposal: Proposal) {
    return this.http.post(this.addproposalUrl, proposal);
  }

  updateProposal(id: string, proposal: Proposal) {
    return this.http.put(`${this.updateproposalUrl}/${id}`, proposal);
  }
}
