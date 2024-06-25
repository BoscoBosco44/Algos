/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode MergeTwoLists(ListNode list1, ListNode list2) {
        int l1 = 0;
        int l2 = 0;
        List<int> listF = [];
        while(l1 < (int)list1.Count && l2 < (int)list2.Count) {
            if(list1[l1] < list2[l2]) {
                listF.Add(list1[l1]);
                l1++;
            }
            else if(list1[l1] > list2[l2]) {
                listF.Add(list2[l2]);
                l2++;
            }
            else if(list1[l1] == list2[l2]) {
                listF.Add(list2[l2]);
                listF.Add(list1[l1]);
                l2++;
                l1++;
            }
        }
        return listF;
    }
}

List<int> list1 = [1,2,4];
List<int> list2 = [1, 3, 4];

WriteLine(MergeTwoLists(list1, list2));


// -------------------- final solution ------------------------

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode MergeTwoLists(ListNode list1, ListNode list2) {
        ListNode dummyHead = new ListNode(-1); // Create a dummy node as the starting point

        ListNode current = dummyHead; // Pointer to keep track of the current node

        while(list1 != null && list2 != null) {
            if(list1.val <= list2.val) {
                current.next = list1; // adds the value of list1 as a node to the current NodeList
                list1 = list1.next; // incrament list1 to the next value in the List
            }
            else { // Do the same things with list2 bc list2 has the samaller value
                current.next = list2;
                list2 = list2.next;
            }
            current = current.next;
        }

        // Attach the remaining nodes if they exist
        if(list1 != null) {
            current.next = list1;
        } 
        else {
            current.next = list2;
        }

        return dummyHead.next; // Return the merged list starting from the node after the dummy head
    }
}