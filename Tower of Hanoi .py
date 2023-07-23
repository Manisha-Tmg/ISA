n=3
def toh(n,source, auxiliary,destination):
    if n==1:
        print(f"Move disk 1 from {source} to {destination}")
        return None
    toh(n-1,source,destination,auxiliary)
    print(f"Move disk {n} from {source} to {destination}")
    toh(n-1,auxiliary,destination,source)
toh(n,"A","B","C")